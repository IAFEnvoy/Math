---
sidebar_position: 1
---

# 非线性系统与稳定性

绝大多数非线性 ODE 系统无法求出解析解，必须转向**定性分析**——研究解的长期行为（稳定、周期、混沌）。本章涵盖不动点分析、线性化方法（Hartman-Grobman 定理）、李雅普诺夫直接法以及极限集与庞加莱-本尼克松定理。

```mermaid
graph TB
    NL[非线性系统<br/>X' = F(X)]

    NL -->|平移变换| FP[不动点分析<br/>不动点 → 零解]

    FP -->|特征值实部≠0| Hyper[双曲不动点]
    Hyper -->|Hartman-Grobman| HG[线性化定理<br/>局部拓扑共轭<br/>由线性部分判稳]

    FP -->|构造能量函数| Lyap[李雅普诺夫直接法]
    Lyap -->|V 正定 V' 负定| AS[渐近稳定]
    Lyap -->|V 正定 V' 半负定| Stable[稳定]
    Lyap -->|V 正定 V' 正定| Unstable[不稳定]

    NL -->|轨线长期行为| Limit[极限集]
    Limit -->|ω-极限集| Omega[刻画轨线最终归宿]
    Limit -->|二维平面| Poincare[庞加莱-本尼克松定理<br/>有界轨道+无不动点<br/>=> 极限环]
```

## 子主题

- [不动点与线性化方法](./fixed-points-linearization.md)
- [李雅普诺夫直接法](./lyapunov.md)
- [极限集与极限环](./limit-cycles.md)
