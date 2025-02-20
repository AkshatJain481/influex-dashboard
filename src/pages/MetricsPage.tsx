import Layout from "../Layout";
import EngagementChart from "../components/common/EngagementChart";
import AgeGroupPieChart from "../components/common/AgeGroupPieChart";

const MetricsPage = () => {
  return (
    <Layout>
      <div className="p-6 ">
        <div className="flex gap-6"> 
          <EngagementChart />
          <AgeGroupPieChart />
        </div>
      </div>
    </Layout>
  );
};

export default MetricsPage;
