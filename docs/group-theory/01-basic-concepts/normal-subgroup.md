---
sidebar_position: 4
---

# 正规子群

## 定义

设 $N \leqslant G$。若对任意 $g \in G$，有 $gNg^{-1} = N$（或等价地 $gN = Ng$），则称 $N$ 为 $G$ 的**正规子群**，记作 $N \trianglelefteq G$。

**直观理解**：正规子群在**共轭作用下不变**，左右陪集一致。这使得我们可以在陪集上定义群运算，构造商群。

## 等价判定

以下条件等价于 $N \trianglelefteq G$：

1. $\forall g \in G, n \in N$，有 $gng^{-1} \in N$
2. $\forall g \in G$，有 $gN = Ng$
3. $\forall g \in G$，有 $gNg^{-1} \subseteq N$
4. $N$ 的所有左陪集也是右陪集

## 正规子群的基本性质

1. **平凡正规子群**：$\{e\} \trianglelefteq G$ 且 $G \trianglelefteq G$
2. **交换群的子群**：若 $G$ 为交换群，则 $G$ 的任意子群都是正规子群
3. **指数为 2 的子群**：若 $[G:H] = 2$，则 $H \trianglelefteq G$
4. **正规子群的交**：正规子群的交集仍是正规子群
5. **正规子群的乘积**：若 $N, M \trianglelefteq G$，则 $NM \trianglelefteq G$

## 与同态的核的关系

群同态的核总是正规子群，反之任意正规子群都是某个同态的核：

$$N \trianglelefteq G \iff N = \ker \varphi \text{（某个同态 }\varphi\text{ 的核）}$$

具体地，$N$ 是自然同态 $\pi: G \to G/N$ 的核。

## 单群

若 $G$ 没有非平凡的正规子群，则称 $G$ 为**单群**（Simple Group）。

- 素数阶循环群 $\mathbb{Z}_p$ 是单群
- 交错群 $A_n$（$n \geq 5$）是单群
- 有限单群的分类是 20 世纪数学的重大成就

## 正规化子

设 $H \leqslant G$，$H$ 在 $G$ 中的**正规化子**为：

$$N_G(H) = \{g \in G \mid gHg^{-1} = H\}$$

- $H \trianglelefteq N_G(H)$
- $H \trianglelefteq G \iff N_G(H) = G$
- $N_G(H)$ 是 $G$ 中使得 $H$ 正规的最大子群

## 常见例子

- $A_n \trianglelefteq S_n$（交错群是对称群的正规子群）
- $SL_n(\mathbb{R}) \trianglelefteq GL_n(\mathbb{R})$
- 群的中心 $Z(G) \trianglelefteq G$
- 换位子群 $G' = [G, G] \trianglelefteq G$
