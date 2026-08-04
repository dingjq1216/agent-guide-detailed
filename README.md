# 智能体构建全流程指南（详解版）

> 面向零基础人员的 AI Agent 深度技术指南 · 17章全链路覆盖

## 简介

本指南是 [智能体构建全流程指南](https://dingjq1216.github.io/agent-guide-detailed/) 的**详解版**，共 17 章，每章独立为一个详细 HTML 文件，包含：

- **零基础友好**：大量生活化类比与实例，无数学背景也能理解
- **痛点深度剖析**：每项技术都有痛点分析（pain / optimize / innovate 三件套）
- **优化策略详解**：针对每个痛点给出具体优化方案与可运行代码
- **创新方向指引**：指明前沿研究方向，为创新提供灵感与路径
- **300+ 代码示例**：Python 完整实现，可直接运行
- **150+ Mermaid 图表**：流程图、架构图、对比图

## 章节目录

| 章 | 标题 | 简介 |
|----|------|------|
| 01 | 大模型选型与硬件选型 | LLM 架构、精度量化与 GPU 显存计算 |
| 02 | 大模型训练全解 | 预训练、微调（LoRA/QLoRA）、对齐（RLHF/DPO） |
| 03 | 感知模块与关键技术 | 多模态理解、文本分块、向量化与编码器 |
| 04 | 记忆模块与关键技术 | 短期记忆、向量数据库、知识图谱 |
| 05 | 检索增强生成（RAG） | 知识库构建、查询优化、GraphRAG、RAG 评估 |
| 06 | 规划模块与关键技术 | CoT、ReAct、ToT、RAP、LLM-A\*、PDDL、ASP、SwiftSage |
| 07 | 行动模块与技术 | 工具调用、API 执行、代码沙箱 |
| 08 | 结果反馈闭环 | 执行验证、评估体系、自动修正 |
| 09 | 反思模块 | Reflexion 框架、经验积累与自我改进 |
| 10 | 上下文压缩机制 | 滑动窗口、语义摘要、KV Cache 优化 |
| 11 | 角色扮演与人格化 | 角色定义、单/多角色扮演、人格化趋势 |
| 12 | Harness 与 Skills | Agent 运行时框架、技能设计 |
| 13 | 工作流设计 | 工作流引擎、编排模式、多 Agent 协作 |
| 14 | 智能体评估 | 六维度评估、GAIA 基准、安全评估 |
| 15 | 部署与运维 | 推理优化、容器部署、监控运维 |
| 16 | 真实产品案例 | Manus 剖析、OpenManus、DeepSeek Agent |
| 17 | 行业应用与发展趋势 | 电商/教育/医疗/金融/制造 + 未来方向 |

## 在线阅读

[https://dingjq1216.github.io/agent-guide-detailed/](https://dingjq1216.github.io/agent-guide-detailed/)

## 目录结构

```
├── index.html                          # 总目录页
├── chapters/
│   ├── 01-model-selection.html         # 大模型选型与硬件选型
│   ├── 02-model-training.html          # 大模型训练全解
│   ├── 03-perception.html              # 感知模块与关键技术
│   ├── 04-memory.html                  # 记忆模块与关键技术
│   ├── 05-rag.html                     # 检索增强生成（RAG）
│   ├── 06-planning.html                # 规划模块与关键技术
│   ├── 07-action.html                  # 行动模块与技术
│   ├── 08-feedback.html                # 结果反馈闭环
│   ├── 09-reflection.html              # 反思模块
│   ├── 10-context-compression.html     # 上下文压缩机制
│   ├── 11-role-play.html               # 角色扮演与人格化
│   ├── 12-harness-skills.html          # Harness与Skills
│   ├── 13-workflow.html                # 工作流设计
│   ├── 14-evaluation.html              # 智能体评估
│   ├── 15-deployment.html              # 部署与运维
│   ├── 16-product-cases.html           # 真实产品案例
│   └── 17-industry-trends.html         # 行业应用与发展趋势
├── _shared/
│   ├── css/style.css                   # 共享样式
│   ├── fonts/                          # 字体文件
│   └── js/                             # Mermaid + 章节交互 JS
└── .github/workflows/static.yml        # GitHub Pages 自动部署
```

## 许可证

MIT License
