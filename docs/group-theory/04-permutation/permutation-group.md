---
sidebar_position: 3
---

# 置换群

## 定义

设 $X$ 为集合，$X$ 到自身的双射称为 $X$ 上的一个**置换**（Permutation）。

$X$ 上所有置换在映射合成下构成群，称为 $X$ 上的**对称群**，记作 $\operatorname{Sym}(X)$。

对称群的任意子群称为**置换群**（Permutation Group）。

## 有限对称群 $S_n$

当 $X = \{1, 2, \ldots, n\}$ 时，$\operatorname{Sym}(X)$ 记作 $S_n$，称为 $n$ 次对称群。

$$|S_n| = n!$$

## 置换的表示

### 1. 双行表示法

$$\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 3 & 1 & 4 & 2 \end{pmatrix}$$

表示 $\sigma(1)=3, \sigma(2)=1, \sigma(3)=4, \sigma(4)=2$

### 2. 轮换分解

每个置换可唯一地写成**不相交轮换**的乘积：

$$\sigma = (1\;3\;4)(2) \quad \text{通常省略1-轮换写作 } (1\;3\;4)$$

### 3. 对换分解

每个置换可写成若干个**对换**（2-轮换）的乘积。分解不唯一，但对换个数的奇偶性唯一。

## 置换的奇偶性与符号

- **偶置换**：可写成偶数个对换之积的置换
- **奇置换**：可写成奇数个对换之积的置换
- **符号**：$\operatorname{sgn}(\sigma) = \begin{cases} +1, & \sigma \text{ 为偶置换} \\ -1, & \sigma \text{ 为奇置换} \end{cases}$

符号映射 $\operatorname{sgn}: S_n \to \{\pm 1\}$ 是群同态。

## 轮换的阶

- $k$-轮换的阶为 $k$
- 不相交轮换乘积的阶 = 各轮换阶的最小公倍数

## Cayley 定理

> 任意群 $G$ 同构于 $S_{|G|}$ 的一个子群。特别地，若 $G$ 有限，则 $G$ 可嵌入某个对称群。

**证明思路**：对 $g \in G$，定义左乘映射 $L_g: G \to G$，$L_g(x) = gx$。则 $g \mapsto L_g$ 给出 $G \hookrightarrow \operatorname{Sym}(G)$。

## 群作用视角

置换群自然地**作用**在集合 $X$ 上。群作用是研究群结构的重要工具：

$$G \times X \to X, \quad (g, x) \mapsto g \cdot x$$

满足 $e \cdot x = x$ 和 $(gh) \cdot x = g \cdot (h \cdot x)$。

等价地，群作用相当于同态 $G \to \operatorname{Sym}(X)$。
