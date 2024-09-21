interface CardProps {
  title: string;
  link: string;
}
export default function JewelleryHome() {
  const Cards = ({ title,link }: CardProps) => (
    <a href={link}>
      <div className="max-w-sm flex flex-col justify-around p-6 bg-[#EEEEEE] h-44 w-72 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl w-full text-center font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <a href="#" className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C07F00] rounded-lg hover:bg-[#4C3D3D]">
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
      </div>
    </a>
  );
  return (
    <div className="flex gap-10 h-screen justify-center items-center bg-[#F5F7F8]">
      <Cards title="New Registration" link="#" />
      <Cards title="Ownership Transfer" link="#" />
      <Cards title="Gold Exchange" link="#" />
    </div>
  );
}
