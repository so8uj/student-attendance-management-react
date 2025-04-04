const App = () => {



    return (
        <>
            <div className="mt-10 container px-3 lg:px-0 mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl text-center lg:text-4xl text-white mb-7">Student Attendance Management System </h2>
                    <form>
                        <div className="join">
                            <input className="input join-item rounded-l-full" placeholder="Student Name" />
                            <button className="btn btn-primary join-item rounded-r-full">Add Student</button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col lg:flex-row mt-9 gap-4">
                    
                    <div className="w-full lg:w-1/3">
                        <h2 className="font-bold text-xl mb-3">All Students</h2>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sobuj</td>
                                        <td className="flex gap-1">
                                            <button className="btn btn-info btn-xs">Edit</button>
                                            <button className="btn btn-error btn-xs">Delete</button>
                                            <button className="btn btn-success btn-xs">Make Present</button>
                                            <button className="btn btn-secondary btn-xs">Make Abcent</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Prodip</td>
                                        <td className="flex gap-1">
                                            <button className="btn btn-info btn-xs">Edit</button>
                                            <button className="btn btn-error btn-xs">Delete</button>
                                            <button className="btn btn-success btn-xs">Make Present</button>
                                            <button className="btn btn-secondary btn-xs">Make Abcent</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h2 className="font-bold text-xl mb-3">Present Students</h2>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Sobuj</th>
                                        <td className="flex gap-1">
                                            <button className="btn btn-secondary btn-xs">Make Abcent</button>
                                            <button className="btn btn-error btn-xs">Accedentally Cliked</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h2 className="font-bold text-xl mb-3">Absent Students</h2>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Prodip</th>
                                        <td className="flex gap-1">
                                            <button className="btn btn-success btn-xs">Make Present</button>
                                            <button className="btn btn-error btn-xs">Accedentally Cliked</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default App