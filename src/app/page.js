
import Compaings from "@/ui/compaings";
import Container from "@/ui/container";
import Counter from "@/ui/counter";
import MainHeader from "@/ui/main-header/main-header";
import ServiceWeProvide from "@/ui/serviceWeProvide";

export default function Home() {
  return (
    <Container>
      <MainHeader />
      <Counter />
      <ServiceWeProvide/>
      <Compaings/>
      
    </Container>
  );
}
