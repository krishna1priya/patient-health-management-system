import { useState } from "react";
import { SnackbarProvider } from "notistack";

import LandingPage from "./components/ui/LandingPageUI/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/ui/authUI/RegisterPage";
import Navbar from "./components/ui/LandingPageUI/Navbar";
import LoginPage from "./components/ui/authUI/LoginPage";
import DoctorApp from "./user-views/Doctor/DoctorApp";
import ClientApp from "./user-views/Client/ClientApp";
import ProviderApp from "./user-views/Provider/ProviderApp";
import { AuthContextProvider } from "./context/AuthContext";
import SearchDoctorResults from "./user-views/Client/search/searchDoctors/searchDoctorResults";
import ViewDoctorProfile from "./user-views/Client/search/searchDoctors/ViewDoctorProfile";
import CovidQuestionnaire from "./user-views/Client/search/searchDoctors/CovidQuestionnaire"
import BookAppointment from "./user-views/Client/search/searchDoctors/BookAppointment";
import ViewResults from "./user-views/Client/search/searchDoctors/ViewResults";
import SearchDoctor from "./user-views/Client/search/searchDoctors/searchDoctor";
import SearchProvider from "./user-views/Client/search/searchPlans/SearchProvider";
import SearchProviderResults from "./user-views/Client/search/searchPlans/SearchProviderResults";
import ProviderProfile from "./user-views/Client/search/searchPlans/ProviderProfile";
import ViewInsurancePlans from "./user-views/Client/search/searchPlans/ViewInsurancePlans";
import UserDetails from "./components/ui/Profile/UserDetails";

function App() {
  return (
    <div className="bg-[#EEEDEB] h-screen">
      <AuthContextProvider>
        <SnackbarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/doctor/*" element={<DoctorApp />} />
              <Route path="/client/*" element={<ClientApp />} />
              <Route path="/provider/*" element={<ProviderApp />}></Route>
              <Route path="/search-doctor" element={<SearchDoctor />} />
              <Route path="/search-provider" element={<SearchProvider />} />
              <Route path="/search-doctor-results" element={<SearchDoctorResults />} />
              <Route path="/view-doctor-profile" element={<ViewDoctorProfile />} />
              <Route path="/view-all-doctors" element={<ViewResults />} />
              <Route path="/book-appointment" element = {<BookAppointment />} />
              <Route path="/search-by-condition" element={<SearchDoctorResults />} />
              <Route path="/covid-questionnaire" element={<CovidQuestionnaire />} />
              <Route path="/view-provider-profile" element={<SearchProviderResults />} />
              <Route path="/search-provider-results" element={<SearchProviderResults />} />
              <Route path="/view-insurance-plans" element={<ViewInsurancePlans />}></Route>
              <Route path="/profile-details" element={<UserDetails />}></Route>
            </Routes>
          </Router>
        </SnackbarProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
