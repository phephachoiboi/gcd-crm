/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

const AllTasks = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-pink-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 bg-white p-4 shadow-md">
        <div className="text-blue-600 font-bold text-xl mb-8">ETPL-TM</div>
        <nav>
          <ul className="space-y-6">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <span className="material-icons">home</span> Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <span className="material-icons">assignment</span> Task
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <span className="material-icons">group</span> Your Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <span className="material-icons">message</span> Message
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <span className="material-icons">settings</span> Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Surya Prakash</h1>
            <p className="text-gray-600">Let's finish your task today!</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="font-bold">July 2024</p>
              <p className="text-gray-500">14</p>
            </div>
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="rounded-full"
            />
          </div>
        </header>

        {/* Task Filters */}
        <div className="flex gap-4 mb-6">
          <button className="bg-green-100 text-green-600 px-4 py-2 rounded">
            Approved
          </button>
          <button className="bg-red-100 text-red-600 px-4 py-2 rounded">
            Rework
          </button>
          <button className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded">
            Pending
          </button>
        </div>

        {/* All Tasks */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">All Tasks</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Create Task
            </button>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4">Task Name</th>
                  <th className="py-3 px-4">Task Created</th>
                  <th className="py-3 px-4">Due Date</th>
                  <th className="py-3 px-4">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4 flex flex-col">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600"
                      />
                      <span>Tech Requirements</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                      This redesign proposal aims to enhance the user
                      experience, reflect Infoware Technologies' commitment to
                      digital innovation.
                    </p>
                    <a href="#" className="text-blue-600 text-sm underline">
                      Tech Requirement 01.pdf
                    </a>
                  </td>
                  <td className="py-3 px-4">Jan 4, 2024</td>
                  <td className="py-3 px-4">Jan 4, 2024</td>
                  <td className="py-3 px-4">Jan 4, 2024</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600"
                    />
                    Dashboard prototype recording.mp4
                  </td>
                  <td className="py-3 px-4">Jan 4, 2024</td>
                  <td className="py-3 px-4">Jan 2, 2024</td>
                  <td className="py-3 px-4">Jan 2, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded float-right">
            Submit for Approval
          </button>
        </section>
      </main>
    </div>
  );
};

export default AllTasks;
