import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpiritualLayout } from "@/components/spiritual/SpiritualLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Prepare from "./pages/Prepare";
import Pray from "./pages/Pray";
import Perform from "./pages/Perform";
import Participate from "./pages/Participate";
import Purchase from "./pages/Purchase";
import Perfect from "./pages/Perfect";
import Perceive from "./pages/Perceive";
import Pledge from "./pages/Pledge";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SpiritualLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/prepare" element={<Prepare />} />
            <Route path="/pray" element={<Pray />} />
            <Route path="/perform" element={<Perform />} />
            <Route path="/participate" element={<Participate />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/perfect" element={<Perfect />} />
            <Route path="/perceive" element={<Perceive />} />
            <Route path="/pledge" element={<Pledge />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SpiritualLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
