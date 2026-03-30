import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PremiumGuidelines from "./pages/PremiumGuidelines";
import VanityPhoneNumbers from "./pages/VanityPhoneNumbers";
import PlayerSupportPackages from "./pages/PlayerSupportPackages";
import BlackMoneyPacks from "./pages/BlackMoneyPacks";
import ARWeaponPackages from "./pages/ARWeaponPackages";
import BIGCAndBIGJPacks from "./pages/BIGCAndBIGJPacks";
import ComboPacks from "./pages/ComboPacks";
import CustomVehicleAccess from "./pages/CustomVehicleAccess";
import CustomHouseAccess from "./pages/CustomHouseAccess";
import BusinessOwnershipPackages from "./pages/BusinessOwnershipPackages";
import GangPackages from "./pages/GangPackages";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/premium-guidelines"} component={PremiumGuidelines} />
      <Route path={"/vanity-phone-numbers"} component={VanityPhoneNumbers} />
      <Route path={"/player-support-packages"} component={PlayerSupportPackages} />
      <Route path={"/black-money-packs"} component={BlackMoneyPacks} />
      <Route path={"/ar-weapon-packages"} component={ARWeaponPackages} />
      <Route path={"/big-c-and-big-j-packs"} component={BIGCAndBIGJPacks} />
      <Route path={"/combo-packs"} component={ComboPacks} />
      <Route path={"/custom-vehicle-access"} component={CustomVehicleAccess} />
      <Route path={"/custom-house-access"} component={CustomHouseAccess} />
      <Route path={"/business-ownership-packages"} component={BusinessOwnershipPackages} />
      <Route path={"/gang-packages"} component={GangPackages} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
