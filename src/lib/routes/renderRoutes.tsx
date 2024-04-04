import IntroCard from "@/components/Intro/introCard/introCard";

interface RoutesArr {
    routes: Array<{
      title: string;
      description: string;
      url: string;
    }>;
}
  
export function renderRoutes({ routes }: RoutesArr) {
    return routes.map((route, index) => (
      <IntroCard
        key={index}
        title={route.title}
        description={route.description}
        url={route.url}
      />
    ));
};
  