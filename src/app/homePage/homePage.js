import FindYourAnswer from "@/components/main-header/findYourAnswer";
import MainHeader from "@/components/main-header/main-header";
import OurTrustedPartner from "@/components/main-header/our-trusted-partner";
import PlayStoreAction from "@/components/main-header/playstoreAction";
import WhyChooseMesh from "@/components/main-header/whyChooseMesh";
import WhyWorkWithUS from "@/components/main-header/whyWorkWithUS";
import Compaings from "@/ui/compaings";
import Container from "@/ui/container";
import Counter from "@/ui/counter";
import CursolComponent from "@/ui/cursoel-effect/cursol";
import MainCard from "@/ui/main-card";
import ServiceWeProvide from "@/ui/serviceWeProvide";

export default function HomePage() {
  return (
    <>
    <Container>
     <MainHeader />
      <Counter />
      <ServiceWeProvide/>
      </Container>
      <Compaings/>
      <Container>
      <CursolComponent/>
      <WhyChooseMesh/>
      <WhyWorkWithUS/>
      <FindYourAnswer/>
      <MainCard/>
      <OurTrustedPartner/>
    </Container>
    </>
  )
}
