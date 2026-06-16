---
sidebar_position: 4
---

# 域

域（Field）是环论中最"完美"的结构——每个非零元都有乘法逆元。在域上，加、减、乘、除（除零外）全部封闭，这使得域成为线性代数、Galois 理论等的基础。

## 定义

设 $F$ 为交换含幺环，$F \neq \{0\}$。若 $F$ 中每个非零元均有乘法逆元，即

$$\forall a \in F, a \neq 0, \exists a^{-1} \in F, \text{ 使 } aa^{-1} = a^{-1}a = 1$$

则称 $F$ 为一个**域**。

**等价定义**：域 = 交换的除环 = 整环 + 非零元可逆

## 域的基本性质

1. **域是无零因子的**：$ab = 0 \Rightarrow a = 0$ 或 $b = 0$（因为若 $a \neq 0$，乘 $a^{-1}$ 得 $b = 0$）
2. **域的非零元构成乘法群**：$F^{\times} = F \setminus \{0\}$ 在乘法下成群
3. **域的乘法群是唯一的非平凡理想**：域只有平凡理想 $\{0\}$ 和 $F$
4. **有限整环必为域**（Wedderburn 小定理：有限除环必为域）

## 域的特征

域 $F$ 的**特征** $\operatorname{char}(F)$ 定义为最小的正整数 $n$ 使 $n \cdot 1 = 0$；若不存在，则 $\operatorname{char}(F) = 0$。

- 特征必为 $0$ 或素数
- $\operatorname{char}(F) = 0 \Rightarrow F \supseteq \mathbb{Q}$（包含有理数域）
- $\operatorname{char}(F) = p \Rightarrow F \supseteq \mathbb{F}_p$（包含 $p$ 元有限域）

详见[特征与素域](../05-characteristic/)章节。

## 域的扩张

设 $E \supseteq F$ 是两个域，称 $E$ 为 $F$ 的**扩域**（Extension Field）。

- $E$ 可视为 $F$ 上的向量空间，其维数 $[E : F]$ 称为**扩张次数**
- $[E : F] = 1 \iff E = F$（平凡扩张）
- $[E : F] < \infty$ 称为**有限扩张**

### 代数元与超越元

- $E/F$ 的扩张中，$F$ 上代数元是满足某个 $F$-系数多项式的元素
- 不是代数元的元素称为超越元

## 常见域的例子

| 域 | 特征 | 说明 |
|---|---|---|
| $\mathbb{Q}$ | $0$ | 有理数域，最小的特征 $0$ 域 |
| $\mathbb{R}$ | $0$ | 实数域 |
| $\mathbb{C}$ | $0$ | 复数域，代数闭域 |
| $\mathbb{F}_p = \mathbb{Z}_p$ | $p$ | $p$ 元有限域（Galois 域） |
| $\mathbb{F}_{p^n}$ | $p$ | $p^n$ 元有限域 |
| $F(x)$ | 同 $F$ | $F$ 上有理函数域 |
| $\mathbb{Q}(\sqrt{2})$ | $0$ | $\mathbb{Q}$ 的二次扩域 |
