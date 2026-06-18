---
sidebar_position: 2
---

# 轨道与稳定子定理

## 轨道的基本性质

### 轨道划分 X

设 $G$ 作用于 $X$。定义关系：$x \sim y \iff \exists g \in G, g \cdot x = y$，则 $\sim$ 是 $X$ 上的等价关系，其等价类恰为轨道。

因此轨道给出 $X$ 的一个**划分**：

$$X = \bigsqcup_{i} \operatorname{Orb}(x_i)$$

其中 $x_i$ 取遍各轨道的代表元。

### 轨道的基本结论

| 性质 | 说明 |
|---|---|
| 轨道不相交 | $x \sim y$ 则 $\operatorname{Orb}(x) = \operatorname{Orb}(y)$；否则 $\operatorname{Orb}(x) \cap \operatorname{Orb}(y) = \varnothing$ |
| 传递作用等价于单轨道 | $G$ 在 $X$ 上传递当且仅当 $X$ 自身是一个轨道 |
| 轨道长度整除 |G| | 有限群作用的每个轨道长度整除 |G| |

## 稳定子群

### 定义

设 $G$ 作用于 $X$，$x \in X$。$x$ 的**稳定子群**为：

$$G_x = \operatorname{Stab}(x) = \{g \in G \mid g \cdot x = x\}$$

可以验证 $G_x \leqslant G$ 确实是子群。

### 同一轨道中的稳定子群

> **命题**：同一轨道中任意两点的稳定子群互相共轭：
> $$G_{g \cdot x} = g \, G_x \, g^{-1}$$

这提供了一个重要技巧：研究轨道中任一点的稳定子群，就了解了整个轨道的稳定子群结构。

## 轨道-稳定子定理

> **定理**（Orbit-Stabilizer Theorem）：设 $G$ 作用于 $X$，$x \in X$。则
> $$|\operatorname{Orb}(x)| = [G : G_x]$$
> 即轨道的大小等于稳定子群在 $G$ 中的指数。若 $G$ 有限，则有
> $$|G| = |\operatorname{Orb}(x)| \cdot |G_x|$$

### 证明

构造映射 $\psi: G/G_x \to \operatorname{Orb}(x)$，$\psi(gG_x) = g \cdot x$。

1. **良定义**：若 $gG_x = hG_x$，则 $h^{-1}g \in G_x$，故 $(h^{-1}g) \cdot x = x$，从而 $g \cdot x = h \cdot x$。
2. **单射**：若 $g \cdot x = h \cdot x$，则 $(h^{-1}g) \cdot x = x$，故 $h^{-1}g \in G_x$，即 $gG_x = hG_x$。
3. **满射**：对任意 $y \in \operatorname{Orb}(x)$，存在 $g \in G$ 使 $y = g \cdot x = \psi(gG_x)$。

因此 $\psi$ 是双射，$|\operatorname{Orb}(x)| = |G/G_x| = [G : G_x]$。

### 重要推论

- **元素的阶整除群的阶的推广**：轨道的长度（而非元素的阶）整除 $|G|$
- **计数公式**：$|X| = \sum_i [G : G_{x_i}]$，其中 $x_i$ 取遍轨道代表元
