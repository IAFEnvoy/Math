---
sidebar_position: 1
---

# 大数定律与中心极限定理

极限理论是概率论的理论基石。大数定律解释了"频率稳定于概率"的数学原理；中心极限定理揭示了大量独立随机变量之和必定趋近于正态分布——解释了正态分布在自然界中的普遍性。

```mermaid
graph TB
    Limit[极限理论] -->|随机变量序列| Conv[收敛性]
    Conv -->|依概率收敛| Pconv[大数定律的基础]
    Conv -->|按分布收敛| Dconv[中心极限定理的基础]
    Conv -->|几乎必然收敛| ASconv[强大数定律的基础]

    Pconv -->|工具| Chebyshev[切比雪夫不等式]
    Pconv -->|结论| LLN[样本均值 → 总体均值]

    Dconv -->|工具| CF[特征函数]
    Dconv -->|结论| CLT[标准化和 → N(0,1)]

    LLN -->|特例| Bernoulli[伯努利大数定律<br/>频率稳定于概率]
    CLT -->|特例| DeMoivre[棣莫弗-拉普拉斯<br/>二项分布正态近似]
```

## 子主题

- [两种收敛性](./modes-of-convergence.md)
- [特征函数](./characteristic-function.md)
- [大数定律](./law-of-large-numbers.md)
- [中心极限定理](./central-limit-theorem.md)
