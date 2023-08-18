import ProjectCardFront from '../components/ProjectCardFront/ProjectCardFront'

import { Tabs } from 'antd';

const TabsComponent: React.FC = () => (
    <Tabs defaultActiveKey="1">
      <Tabs.pane tab="Frontend" key="1">
        <ProjectCardFront  />
      </Tabs.pane>
    </Tabs>
);

export default TabsComponent;