import React, { Suspense, Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';

import './app.css';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Algo deu errado.</h1>;
        }

        return this.props.children; 
    }
}

const App = () => {
    const HomePage = React.lazy(() => import("HomeApp/HomePage"));
    const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

    return (
        <Router>
            <ErrorBoundary>
                <div>
                    <Navbar color="light" light expand="md">
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact">Contact</Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Suspense fallback="Loading Home Page...">
                                    <HomePage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Suspense fallback="Loading Home Page...">
                                    <ContactPage />
                                </Suspense>
                            }
                        />
                    </Routes>
                </div>
            </ErrorBoundary>
        </Router>
    );
}

export default App;