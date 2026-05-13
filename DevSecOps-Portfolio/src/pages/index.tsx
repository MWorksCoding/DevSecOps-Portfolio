import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/hero';
import MySkills from '@site/src/components/my-skills';
import MyProjects from '@site/src/components/my-projects';
import Contact from '@site/src/components/contact';

export default function Home(): ReactNode {
  return (
    <Layout title="MK — DevSecOps Engineer" description="DevSecOps Portfolio by MK">
      <Hero />
      <MySkills />
      <MyProjects />
      <Contact />
    </Layout>
  );
}
