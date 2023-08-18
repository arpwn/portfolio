import ProjectCardFront from '../components/ProjectCardFront/ProjectCardFront'

import { Tabs, items } from 'antd';

const TabsComponent: React.FC = () => (
    <Tabs defaultActiveKey="1">
      <items tab="Frontend" key="1">
        <ProjectCardFront  />
      </items>
    </Tabs>
);

export default TabsComponent;