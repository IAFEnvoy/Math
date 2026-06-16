---
sidebar_position: 1
---

# 一阶 ODE 解法

一阶常微分方程是最基础也是最重要的一类 ODE。掌握变量分离、积分因子和恰当方程三大工具，并学会如何将伯努利、黎卡提等特殊非线性方程化归为线性方程来求解。

```mermaid
graph TB
    FO[一阶 ODE] -->|"dy/dx = f(x)·g(y)"| Sep[变量分离法]
    FO -->|"dy/dx + P(x)y = Q(x)"| Linear[一阶线性<br/>积分因子法]
    FO -->|"Mdx + Ndy = 0"| Exact[恰当方程]
    Linear -->|"y = u·v 变换"| Bernoulli[伯努利方程<br/>可化为线性]
    Bernoulli -->|可化为线性| Linear2[一阶线性]
    Linear -->|已知特解后| Riccati[黎卡提方程<br/>可化为线性]
    FO -->|隐式或不便分离| Param[参数表示法<br/>可解出 x 或 y]
    Param -->|特例| Clairaut["Clairaut 方程<br/>y = xp + f(p)"]
```

## 子主题

- [变量分离、齐次与恰当方程](./separable-homogeneous-exact.md)
- [一阶线性方程（积分因子法）](./linear-first-order.md)
- [伯努利方程与黎卡提方程](./bernoulli-riccati.md)
- [参数表示法](./parametric-form.md)
