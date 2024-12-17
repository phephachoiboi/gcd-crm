/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

const EmployeeDashboard = () => {
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
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Surya Prakash</h1>
            <p className="text-gray-600">Let's finish your task today!</p>
          </div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
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

        {/* Today's Task */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4">Today's Task</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <input
                type="checkbox"
                checked
                className="form-checkbox text-blue-600"
              />
              <span className="flex-1">
                Create a user flow of social application design
              </span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                Completed
              </span>
            </li>
            <li className="flex items-center gap-4">
              <input
                type="checkbox"
                checked
                className="form-checkbox text-blue-600"
              />
              <span className="flex-1">
                Landing page design for Fintech project of Singapore
              </span>
              <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                In Review
              </span>
            </li>
            <li className="flex items-center gap-4">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="flex-1">
                Interactive prototype for app screens of deltamind project
              </span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Ongoing
              </span>
            </li>
          </ul>
        </section>

        {/* Project Summary */}
        <section>
          <h2 className="text-xl font-bold mb-4">Project Summary</h2>
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Project Manager</th>
                <th className="py-3 px-4 text-left">Due Date</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-4">Web page Design</td>
                <td className="py-3 px-4">Kiran Kan</td>
                <td className="py-3 px-4">May 25, 2024</td>
                <td className="py-3 px-4 text-green-600">Approved</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4">Uolytf AI App</td>
                <td className="py-3 px-4">Neelesh Kumar</td>
                <td className="py-3 px-4">June 20, 2024</td>
                <td className="py-3 px-4 text-yellow-600">Delayed</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <p className="text-2xl font-bold">80%</p>
            <p className="text-gray-600">Weekly Activity</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <p className="text-2xl font-bold">40</p>
            <p className="text-gray-600">Total Tasks Completed</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <p className="text-2xl font-bold">105</p>
            <p className="text-gray-600">Projects Worked</p>
          </div>
        </section>
      </main>
    </div>
  );
};
export default EmployeeDashboard;
