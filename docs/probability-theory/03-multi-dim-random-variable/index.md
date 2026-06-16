---
sidebar_position: 1
---

# 多维随机变量

多维随机变量将单个随机变量推广到随机向量。联合分布、边际分布、条件分布以及独立性刻画了各分量之间的关系；协方差和相关系数量化了线性相关程度。

```mermaid
graph TB
    MultiRV["多维随机变量<br/>(X, Y)"] -->|联合| Joint["联合分布<br/>联合分布列/密度"]
    Joint -->|求和/积分| Marginal["边际分布"]
    Joint -->|独立性判定| Indep["联合 = 边际乘积"]
    MultiRV -->|函数| Trans["和/积/商的分布<br/>卷积公式 / 变量变换法"]
    MultiRV -->|特征数| Cov["协方差 Cov(X,Y)<br/>相关系数 ρ"]
    Joint -->|条件| Cond["条件分布<br/>条件期望 E(Y|X)"]
```

## 子主题

- [联合分布与边际分布](./joint-marginal.md)
- [条件分布与条件期望](./conditional-distribution.md)
- [协方差与相关系数](./covariance-correlation.md)
- [多维变量函数的分布](./multivariate-transformation.md)
