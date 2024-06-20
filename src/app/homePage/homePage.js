import FindYourAnswer from "@/components/main-header/findYourAnswer";
import MainHeader from "@/components/main-header/main-header";
import WhyChooseMesh from "@/components/main-header/whyChooseMesh";
import WhyWorkWithUS from "@/components/main-header/whyWorkWithUS";
import Compaings from "@/ui/compaings";
import Container from "@/ui/container";
import Counter from "@/ui/counter";
import CursolComponent from "@/ui/cursoel-effect/cursol-component";
import ServiceWeProvide from "@/ui/serviceWeProvide";

export default function HomePage() {
  return (
    <>
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
    </>
  )
}
