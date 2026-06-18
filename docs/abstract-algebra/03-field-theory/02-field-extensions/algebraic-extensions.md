---
sidebar_position: 1
---

# 代数扩张

## 域扩张的基本概念

设 $E \supseteq F$ 是两个域（$F$ 是 $E$ 的子域）。$E$ 可以看作 $F$ 上的**向量空间**。

### 扩张次数

$$[E : F] = \dim_F E$$

即 $E$ 作为 $F$-向量空间的维数，称为 $E$ 对 $F$ 的**扩张次数**。

- $[E : F] = 1 \iff E = F$（平凡扩张）
- $[E : F] < \infty$ 称为**有限扩张**
- $[E : F] = \infty$ 称为**无限扩张**

### 次数公式（塔式定理）

若 $F \subseteq K \subseteq E$，则：

$$[E : F] = [E : K] \cdot [K : F]$$

这是扩张论中最常用的计算公式。

## 代数元与超越元

### 定义

设 $E/F$ 为域扩张，$\alpha \in E$。

- 若存在非零多项式 $f(x) \in F[x]$ 使 $f(\alpha) = 0$，则称 $\alpha$ 在 $F$ 上是**代数元**
- 否则称 $\alpha$ 在 $F$ 上是**超越元**

### 极小多项式

若 $\alpha$ 是 $F$ 上的代数元，则存在唯一的**首一不可约**多项式 $m_\alpha(x) \in F[x]$ 使 $m_\alpha(\alpha) = 0$。$m_\alpha(x)$ 称为 $\alpha$ 在 $F$ 上的**极小多项式**。

极小多项式的次数 $d = \deg m_\alpha$ 称为 $\alpha$ 在 $F$ 上的**次数**。

### 关键性质

- $m_\alpha(x)$ 在 $F[x]$ 中不可约
- 若 $f(\alpha) = 0$，则 $m_\alpha(x) \mid f(x)$
- $F(\alpha) \cong F[x]/(m_\alpha(x))$
- $[F(\alpha) : F] = \deg m_\alpha$

## 代数扩张

若 $E$ 中每个元素都是 $F$ 上的代数元，则称 $E/F$ 为**代数扩张**。

> **定理**：有限扩张 $\Rightarrow$ 代数扩张。反之不一定成立。

### 反例

$\overline{\mathbb{Q}}$（全体代数数构成的域）是 $\mathbb{Q}$ 的代数扩张，但是无限扩张。

## 典型例子

| 扩张 | 次数 | 代数/超越 |
|---|---|---|
| $\mathbb{C} / \mathbb{R}$ | $2$ | 代数（极小多项式 $x^2+1$，$\alpha = i$） |
| $\mathbb{Q}(\sqrt{2}) / \mathbb{Q}$ | $2$ | 代数（极小多项式 $x^2-2$） |
| $\mathbb{Q}(\sqrt[3]{2}) / \mathbb{Q}$ | $3$ | 代数（极小多项式 $x^3-2$） |
| $\mathbb{Q}(\pi) / \mathbb{Q}$ | $\infty$ | 超越（$\pi$ 是超越数） |
| $\mathbb{F}_{p^n} / \mathbb{F}_p$ | $n$ | 代数 |
