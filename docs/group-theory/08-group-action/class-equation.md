---
sidebar_position: 4
---

# 类方程

将轨道分解应用于共轭作用，得到群论中极为重要的**类方程**——它是分析有限群结构的核心工具。

## 共轭作用的轨道分解

$G$ 共轭作用于自身：$g \cdot x = gxg^{-1}$。

- 轨道 = **共轭类**：$\operatorname{Conj}(x) = \{gxg^{-1} \mid g \in G\}$
- 稳定子群 = **中心化子**：$C_G(x) = \{g \in G \mid gx = xg\}$

由轨道-稳定子定理：
$$|\operatorname{Conj}(x)| = [G : C_G(x)]$$

### 两类特殊的共轭类

| 共轭类大小 | 条件 | 含义 |
|---|---|---|
| 1 | $gxg^{-1} = x, \forall g \in G$ | $x \in Z(G)$，即 $x$ 在中心 |
| $\geq 2$ | $\exists g, gxg^{-1} \neq x$ | $x \notin Z(G)$ |

## 类方程

> **类方程**：设 $G$ 为有限群。则
> $$|G| = |Z(G)| + \sum_{i} [G : C_G(x_i)]$$
>
> 其中 $Z(G) = \{g \in G \mid \forall h \in G, gh = hg\}$ 是 $G$ 的**中心**，求和遍历所有大小 $\geq 2$ 的共轭类的代表元。

### 推导

将 $G$ 分解为互不相交的共轭类的并集。大小为 $1$ 的共轭类恰为 $Z(G)$ 中的元素（共 $|Z(G)|$ 个）。每个大小 $\geq 2$ 的共轭类 $\operatorname{Conj}(x_i)$ 的大小为 $[G : C_G(x_i)]$。因此：

$$|G| = \underbrace{|Z(G)|}_{\text{大小为 1 的共轭类}} + \sum_{i} [G : C_G(x_i)]$$

其中 $[G : C_G(x_i)] \geq 2$ 且 $[G : C_G(x_i)] \mid |G|$。

## 类方程的应用

### 1. p-群的中心的非平凡性

> **定理**：若 $|G| = p^k$（$k \geq 1$），则 $|Z(G)| \geq p$，特别地 $Z(G) \neq \{e\}$。

**证明**：由类方程 $p^k = |Z(G)| + \sum_i [G : C_G(x_i)]$。每个 $[G : C_G(x_i)]$ 是 $|G| = p^k$ 的真因子，故为 $p$ 的倍数。因此 $\sum_i [G : C_G(x_i)] \equiv 0 \pmod{p}$，推出 $|Z(G)| \equiv 0 \pmod{p}$。又 $e \in Z(G)$ 故 $|Z(G)| \geq 1$，从而 $|Z(G)| \geq p$。

### 2. p^2 阶群必为交换群

由 $p$-群中心非平凡知 $|Z(G)| = p$ 或 $p^2$。若 $|Z(G)| = p$，则 $G/Z(G)$ 为 $p$ 阶循环群，此时可证 $G$ 交换，矛盾。故 $|Z(G)| = p^2$，即 $G$ 交换。

### 3. Cauchy 定理的群作用证法

可利用类方程证明：若素数 $p \mid |G|$，则 $G$ 含 $p$ 阶元素。这是类方程的一个经典应用。

## 类方程与 Sylow 定理

类方程在研究 Sylow $p$-子群的正规性时非常有用——Sylow 第三定理 $n_p \equiv 1 \pmod{p}$ 本质上就是共轭作用于 Sylow $p$-子群集合上的类方程推论。
