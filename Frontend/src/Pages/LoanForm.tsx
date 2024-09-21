export default function LoanForm(){
  return (
    <div className="container mx-auto p-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Loan Application</h1>
      </div>
      <div>
        <form className="space-y-4">
          <div>
            <label htmlFor="loanAmount" className="block font-medium">Loan Amount:</label>
            <input type="text" id="loanAmount" name="loanAmount" required className="border rounded p-2 w-full" />
          </div>

          <div>
            <label htmlFor="interestRate" className="block font-medium">Interest Rate:</label>
            <input type="text" id="interestRate" name="interestRate" required className="border rounded p-2 w-full" />
          </div>

          <div>
            <label htmlFor="loanTerm" className="block font-medium">Loan Term:</label>
            <input type="text" id="loanTerm" name="loanTerm" required className="border rounded p-2 w-full" />
          </div>

          <div>
            <label htmlFor="repaymentAmount" className="block font-medium">Repayment Amount per Month:</label>
            <input type="text" id="repaymentAmount" name="repaymentAmount" required className="border rounded p-2 w-full" />
          </div>

          <div>
            <label htmlFor="lateFee" className="block font-medium">Late Fee:</label>
            <input type="text" id="lateFee" name="lateFee" required className="border rounded p-2 w-full" />
          </div>

          <div id="Agreement" className="mt-6">
            <h3 className="text-lg font-semibold">Agreement Policy</h3>
            <ol className="list-decimal list-inside mt-2">
              <li>If the Borrower defaults on its payments and fails to cure said default within a reasonable amount of time, the Lender will have the option to declare the entire remaining amount of principal and any accrued interest immediately due and payable.</li>
              <li>Prepayment. The Borrower will not be penalized for early payment.</li>
              <li>Severability. In the event any provision of this Agreement is deemed invalid or unenforceable, in whole or in part, that part shall be severed from the remainder of the Agreement and all other provisions shall continue in full force and effect as valid and enforceable.</li>
            </ol>
          </div>

          <button type="submit" className="bg-[#3F2305] text-white font-bold py-2 px-4 rounded">Proceed</button>
        </form>
      </div>
    </div>
  );
}
