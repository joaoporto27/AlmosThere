import "./globals.css";

export const metadata = {
    title:"Filtro de Países",
    icons: {
        icon: "/icons/favicon.ico",
    },
    description: "Projeto pra mostrar tudo que eu sei",

};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
