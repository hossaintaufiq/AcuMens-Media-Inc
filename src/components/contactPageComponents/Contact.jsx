const Contact = ({ title, fields, checkboxes, buttonText }) => {
  console.log(fields,checkboxes);
  return (
    <div className="flex justify-center items-center p-6 bg-gradient-to-b from-lavenderMist via-lightGray to-pureWhite">
      <div className="container max-w-lg bg-white rounded-3xl p-6 hover:shadow-xl shadow-slate-800 border-r-8 border-b-8 border-black">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">{title}</h1>
        <form>
          {fields?.map((field) => (
            <div className="mb-6" key={field.id}>
              
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.id}>
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  className="shadow appearance-none border rounded-2xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-xl"
                  rows="5"
                ></textarea>
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="shadow appearance-none border rounded-2xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-xl"
                />
              )}
            </div>
          ))}

          {checkboxes.map((checkbox, index) => (
            <div className="mb-4" key={index}>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox required:text-blue-600" />
                <span className="ml-2 text-gray-700">
                  {checkbox.label}
                  {checkbox.linkText && (
                    <a href={checkbox.link} className="text-blue-500 underline">
                      {checkbox.linkText}
                    </a>
                  )}
                  {checkbox.secondLinkText && (
                    <>
                      {' and '}
                      <a href={checkbox.secondLink} className="text-blue-500 underline">
                        {checkbox.secondLinkText}
                      </a>
                    </>
                  )}
                </span>
              </label>
            </div>
          ))}

          <div className="flex items-center justify-center mt-6 md:mt-10">
            <button
              type="submit"
              className="relative bg-slate-800 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-md"
            >
              <a href="#" className="text-white inline-block relative group">
                {buttonText}
                <span className="underline-animation absolute left-0 bottom-0 w-full h-1 bg-purple-300"></span>
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
