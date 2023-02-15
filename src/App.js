// Framework
import { memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageProvider from './contexts/pageProvider';
import DefaultLayout from './layouts/DefaultLayout';

// Data
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <PageProvider>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Component = route.element;
                            let Layout = DefaultLayout;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Component />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </PageProvider>
        </Router>
    );
}

export default memo(App);
