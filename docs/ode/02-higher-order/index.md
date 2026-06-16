---
sidebar_position: 1
---

# 高阶线性 ODE

高阶线性常微分方程的一般形式为 $n$ 阶线性方程。掌握降阶法（已知一个特解求通解）和欧拉方程的变量代换技巧，是求解这类方程的核心能力。

```mermaid
graph TB
    HO["n 阶线性 ODE<br/>y^(n) + a_{n-1}(x)y^(n-1) + ... + a_0(x)y = f(x)"]
    HO -->|"已知非零特解 y1"| RO["降阶法<br/>设 y2 = u·y1"]
    HO -->|变系数特殊形式| Euler["欧拉方程<br/>令 x = e^t 化为常系数"]
    Euler -->|"令 x = e^t"| ConstCoeff[常系数线性ODE]
    RO -->|将 n 阶降为 n-1 阶| LowerOrder[低一阶方程]
