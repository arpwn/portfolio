import React from 'react';
import { GithubOutlined, SelectOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Col } from 'antd';
import Navbar from '../assets/images/navbar.png';
import Advice from '../assets/images/advice.png';
import Preview from '../assets/images/preview.jpg';
import QR from '../assets/images/qr.png';
import Bello from '../assets/images/bello.png';
import Image from 'next/image';

const { Meta } = Card;

const ProjectCardBack: React.FC = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card
        style={{ width: 300 }}
        cover={
          <Image
            width={200}
            height={200}
            alt="qr"
            src={QR}
          />
        }
        actions={[
          <a href="https://github.com/arpwn/qr-code-component" key="github" target="_blank" rel="noopener noreferrer">
            <GithubOutlined />
          </a>,
          <a href="https://qr-code-component-three-iota.vercel.app/" key="external" target="_blank" rel="noopener noreferrer">
            <SelectOutlined />
          </a>,
        ]}
      >
        <Meta
          title="QR"
          description="QR component using JS"
        />
      </Card>
    </Col>
    
    {/* Second */}
    <Col span={8}>
      <Card
        style={{ width: 300 }}
        cover={
          <Image
            width={200}
            height={200}
            alt="advice"
            src={Advice}
          />
        }
        actions={[
          <a href="https://github.com/arpwn/advice_generator" key="github" target="_blank" rel="noopener noreferrer">
            <GithubOutlined />
          </a>,
          <a href="https://advice-generator-seven.vercel.app/" key="external" target="_blank" rel="noopener noreferrer">
            <SelectOutlined />
          </a>,
        ]}
      >
        <Meta
          title="Advice generator"
          description="Advice generator using JS"
        />
      </Card>
    </Col>

    {/* Third */}
    <Col span={8}>
      <Card
        style={{ width: 300 }}
        cover={
          <Image
            width={200}
            height={200}
            alt="preview"
            src={Preview}
          />
        }
        actions={[
          <a href="https://github.com/arpwn/product-preview-card-component" key="github" target="_blank" rel="noopener noreferrer">
            <GithubOutlined />
          </a>,
          <a href="https://product-preview-card-component-eosin-ten.vercel.app/" key="external" target="_blank" rel="noopener noreferrer">
            <SelectOutlined />
          </a>,
        ]}
      >
        <Meta
          title="Product preview card component"
          description="Preview card component using HTML"
        />
      </Card>
    </Col>

    {/* Fourth */}
    <Col span={8}>
      <Card
        style={{ width: 300 }}
        cover={
          <Image
            width={200}
            height={200}
            alt="navbar"
            src={Navbar}
          />
        }
        actions={[
          <a href="https://github.com/arpwn/react-navbar" key="github" target="_blank" rel="noopener noreferrer">
            <GithubOutlined />
          </a>,
          <a href="https://react-navbar-gules.vercel.app/" key="external" target="_blank" rel="noopener noreferrer">
            <SelectOutlined />
          </a>,
        ]}
      >
        <Meta
          title="Navbar"
          description="React JS Navbar using React Router"
        />
      </Card>
    </Col>

    {/* Fifth */}
    <Col span={8}>
      <Card
        style={{ width: 300 }}
        cover={
          <Image
            width={200}
            height={200}
            alt="bello"
            src={Bello}
          />
        }
        actions={[
          <a href="https://github.com/arpwn/bellotero.io" key="github" target="_blank" rel="noopener noreferrer">
            <GithubOutlined />
          </a>,
          <a href="https://bellotero-io.vercel.app/page-1" key="external" target="_blank" rel="noopener noreferrer">
            <SelectOutlined />
          </a>,
        ]}
      >
        <Meta
          title="Bellotero.io"
          description="Landing page mockup"
        />
      </Card>
    </Col>
    
  </Row>
);

export default ProjectCardBack;