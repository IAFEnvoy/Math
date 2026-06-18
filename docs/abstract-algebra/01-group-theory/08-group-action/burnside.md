---
sidebar_position: 3
---

# Burnside 引理

Burnside 引理（也称 Cauchy-Frobenius 引理）是群作用应用于组合计数的最经典工具——通过计算每个群元素的不动点数来求轨道个数。

## 定理陈述

> **Burnside 引理**：设有限群 $G$ 作用于有限集合 $X$。则轨道的个数 $N$ 为：
> $$N = \frac{1}{|G|} \sum_{g \in G} |X^g|$$
> 其中 $X^g = \{x \in X \mid g \cdot x = x\}$ 是 $g$ 的不动点集。

### 直观理解

轨道的个数 = 群元素的"平均不动点数"。每个群元素的不动点贡献 $1/|G|$，加起来就是轨道数。

## 证明（双重计数）

考虑集合 $S = \{(g, x) \in G \times X \mid g \cdot x = x\}$。

**方法一**：按 $g$ 计数
$$|S| = \sum_{g \in G} |X^g|$$

**方法二**：按 $x$ 计数
$$|S| = \sum_{x \in X} |G_x|$$

由轨道-稳定子定理，对每个轨道 $\mathcal{O}$：
$$\sum_{x \in \mathcal{O}} |G_x| = |\mathcal{O}| \cdot |G_{x_0}| = |G|$$

因此 $\sum_{x \in X} |G_x| = N \cdot |G|$。

两式联立：
$$\sum_{g \in G} |X^g| = N \cdot |G| \quad\Longrightarrow\quad N = \frac{1}{|G|} \sum_{g \in G} |X^g|$$

## 应用实例：项链计数

### 问题

用 $n$ 种颜色的珠子串成长度为 $k$ 的项链，考虑**旋转等价**（即可旋转重合的视为同一条），不同项链有多少种？

### 建模

- 集合 $X$：所有染色方案，共 $n^k$ 种
- 群 $G = \mathbb{Z}_k$（旋转群），作用于项链使其旋转
- 目标：求轨道数 $N$

### 计算

对于旋转 $r^d$（$d = 0, 1, \ldots, k-1$），一个染色方案被 $r^d$ 固定当且仅当珠子的颜色以周期 $\gcd(d, k)$ 循环。因此：

$$|X^{r^d}| = n^{\gcd(d, k)}$$

由 Burnside 引理：

$$N = \frac{1}{k} \sum_{d=0}^{k-1} n^{\gcd(d, k)}$$

### 例子：k=4, n=2

$N = \dfrac{1}{4}\left(2^{\gcd(0,4)} + 2^{\gcd(1,4)} + 2^{\gcd(2,4)} + 2^{\gcd(3,4)}\right) = \dfrac{1}{4}(16 + 2 + 4 + 2) = 6$

即 2 色 4 珠旋转等价项链共 6 种。

**推广**：若同时考虑**翻转等价**（即二面体群 $D_{2k}$ 作用），可以用同样的 Burnside 方法计算，只需额外计算反射的不动点数。
