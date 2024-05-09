import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

// dist/assets/index-167b7165.css   29.91 kB │ gzip:   5.07 kB
// dist/assets/index-c19f988b.js   515.26 kB │ gzip: 148.46 kB

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route
                path="/"
                element={<Homepage />}
              />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={
                    <Navigate
                      replace
                      to="cities"
                    />
                  }
                />
                <Route
                  path="form"
                  element={<Form />}
                />
                <Route
                  path="cities"
                  element={<CityList />}
                />
                <Route
                  path="cities/:id"
                  element={<City />}
                />
                <Route
                  path="countries"
                  element={<CountryList />}
                />
                <Route
                  path="form"
                  element={<p>Form</p>}
                />
              </Route>
              <Route
                path="product"
                element={<Product />}
              />
              <Route
                path="pricing"
                element={<Pricing />}
              />
              <Route
                path="login"
                element={<Login />}
              />
              <Route
                path="*"
                element={<PageNotFound />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
