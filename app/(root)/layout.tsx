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
            <div className='flex flex-col w-screen mx-4 lg:w-3/4 lg:ml-0'>
                <Navbar />
                <main className='flex flex-col h-full p-4 mb-4 overflow-y-auto bg-yellow-300 rounded-md'>
                    {children}
                </main>
            </div>
        </div>
    );
}
