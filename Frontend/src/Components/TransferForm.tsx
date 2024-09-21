interface FormProps{
    title:string
    input1:string
    input2?:string
    input3?:string
    input4?:boolean
}
export default function TransferForm({title,input1,input2,input3,input4}:FormProps) {
    return (
      <div className="w-1/3 mx-auto h-[28rem] bg-white p-8 border border-gray-200 rounded-xl shadow-lg w-64">
        <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">{title}</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray font-medium mb-2">
              {input1}
            </label>
            <input
              type="text"
              placeholder={`Enter your ${input1}`}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
            {input2&&
            (<div className="mb-4">
            <label htmlFor="aadhar" className="block text-gray- font-medium mb-2">
              {input2}
            </label>
            <input
              type="text"
              placeholder={`Enter your ${input2}`}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
            )}
          {input3&&
          (<div className="mb-4">
            <label htmlFor="huid" className="block text-gray- font-medium mb-2">
              {input3}
            </label>
            <input
              type="text"
              placeholder={`Enter your ${input3}`}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
        )}
        {input4&&
          (<div className="mb-4">
            <label htmlFor="huid" className="block text-gray- font-medium mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              placeholder={`Enter your OTP`}
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C07F00]"
            />
          </div>
        )}
        </form>
      </div>
    );
  }
