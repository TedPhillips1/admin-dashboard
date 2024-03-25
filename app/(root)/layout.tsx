import Navbar from '@/components/custom/Navbar';
import { Sidebar } from 'lucide-react';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex h-screen flex-row'>
            <Sidebar />
            <div className='flex flex-col'>
                <Navbar />
                <main className='flex-1'>{children}</main>
            </div>
        </div>
    );
}
