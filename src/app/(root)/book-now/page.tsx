import type { Metadata } from 'next';
import TaxiBooker from "@/components/sections/taxi-booker";
import PageContainer from '@/components/page-container';

export const metadata: Metadata = {
  title: 'Book Now',
  description: 'Book your next Journey with us, using our convenient online form'
};

export default function BookNowPage() {
  return (
    <div className=' py-20 space-y-12'>
      <TaxiBooker />
      <PageContainer className='py-12'>download our app</PageContainer>
    </div>
  )
}

