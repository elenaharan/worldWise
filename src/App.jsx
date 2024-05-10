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
