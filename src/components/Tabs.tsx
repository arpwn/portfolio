import { Tabs } from 'antd';
import ProjectCardFront from '../components/ProjectCardFront/ProjectCardFront'

const { TabPane } = Tabs;

const TabsComponent: React.FC = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Frontend" key="1">
      <ProjectCardFront />
    </TabPane>
    <TabPane tab="Backend" key="2">
      <h2>Upcoming</h2>
    </TabPane>
  </Tabs>
);

export default TabsComponent;