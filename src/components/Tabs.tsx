import { Tabs } from 'antd';
import ProjectCardFront from '../components/ProjectCardFront/ProjectCardFront'

const { TabPane } = Tabs;

const TabsComponent: React.FC = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Frontend" key="1">
      <ProjectCardFront />
    </TabPane>
  </Tabs>
);

export default TabsComponent;