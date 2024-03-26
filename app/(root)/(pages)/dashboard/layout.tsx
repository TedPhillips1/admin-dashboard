import Navbar from '@/components/custom/Navbar';
import Sidebar from '@/components/custom/Sidebar';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-row gap-4 h-screen w-screen overflow-x-hidden'>
            <Sidebar />
            <div className='flex flex-col w-screen mx-4 lg:w-3/4 lg:ml-0 overflow-y-scroll'>
                <Navbar />
                <main className='flex flex-col mb-4 p-4'>{children}</main>
            </div>
        </div>
    );
}
