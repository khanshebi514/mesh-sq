
import Compaings from "@/ui/compaings";
import Container from "@/ui/container";
import Counter from "@/ui/counter";
import CursolComponent from "@/ui/cursoel-effect/cursol-component";
import MainHeader from "@/components/main-header/main-header";
import ServiceWeProvide from "@/ui/serviceWeProvide";
import WhyChooseMesh from "@/components/main-header/whyChooseMesh";
import WhyWorkWithUS from "@/components/main-header/whyWorkWithUS";
import FindYourAnswer from "@/components/main-header/findYourAnswer";

export default function Home() {
  return (
    <Container>
      <MainHeader />
      <Counter />
      <ServiceWeProvide/>
      <Compaings/>
      <CursolComponent/>
      <WhyChooseMesh/>
      <WhyWorkWithUS/>
      <FindYourAnswer/>
    </Container>
  );
}
