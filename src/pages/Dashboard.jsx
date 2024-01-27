import DashboardItem from "../components/DashboardItem";
// import DashboardEvents from "../components/DashboardEvents";
// import DashboardNews from "../components/DashboardNews";

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col gap-7 py-10 px-5 max-w-7xl mx-auto">
            <h1 className="font-semibold text-5xl">Dashboard</h1>
            <DashboardItem />
            {/* <DashboardEvents />
            <DashboardNews /> */}
        </div>
    );
};

export default Dashboard;