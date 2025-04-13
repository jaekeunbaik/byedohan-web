import MainLayout from '@/layouts/MainLayout';
import HeaderSection from '@/components/home/HeaderSection';
import Footer from '@/components/common/Footer';
import IntroSection from '@/components/home/IntroSection';
import TechStackSection from '@/components/home/TechStackSection';
import ProjectSection from '@/components/home/ProjectSection';
import ContactCTA from '@/components/home/ContactCTA';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <HeaderSection />

        <main className="max-w-6xl mx-auto px-4 py-10">
          <IntroSection />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <TechStackSection />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <ProjectSection />
          </motion.div>
        </main>

        <ContactCTA />

        <Footer />
      </div>
    </MainLayout>
  );
}
