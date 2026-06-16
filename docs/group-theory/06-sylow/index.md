---
sidebar_position: 1
---

# Sylow 定理

Sylow 定理是有限群论中最重要的结构定理之一，揭示了有限群的 $p$-子群结构。

```mermaid
graph LR
    Syl[Sylow 子群] -->|满足三大定理| SylTh["Sylow 定理<br/>存在/共轭/计数"]
    Syl -->|若唯一则必为| NS[正规子群]
```

## 基本概念

### $p$-群

设 $p$ 为素数。若群 $P$ 的每个元素的阶都是 $p$ 的幂，则称 $P$ 为 **$p$-群**。

等价地：$|P| = p^k$（$k \geq 0$）。

### $p$-子群

$G$ 的子群若为 $p$-群，则称为 $G$ 的一个 **$p$-子群**。

### Sylow $p$-子群

设 $|G| = p^k \cdot m$，其中 $p \nmid m$。$G$ 中阶为 $p^k$ 的子群称为 $G$ 的一个 **Sylow $p$-子群**。

即：Sylow $p$-子群是 $G$ 的极大的 $p$-子群。

## Sylow 三大定理

### 第一定理（存在性）

> 设 $p$ 为素数，$|G| = p^k \cdot m$（$p \nmid m$），则 $G$ 存在至少一个 Sylow $p$-子群。
>
> 更一般地，对任意 $0 \leqslant i \leqslant k$，$G$ 存在 $p^i$ 阶子群。

### 第二定理（共轭性）

> $G$ 的任意两个 Sylow $p$-子群相互共轭。
>
> 即若 $P, Q$ 均为 Sylow $p$-子群，则 $\exists g \in G$，使得 $Q = gPg^{-1}$。
>
> 进一步，$G$ 的任意 $p$-子群均包含在某个 Sylow $p$-子群中。

### 第三定理（计数定理）

> 设 $n_p$ 为 $G$ 中 Sylow $p$-子群的个数，则：
>
> 1. $n_p \equiv 1 \pmod{p}$（$n_p$ 模 $p$ 余 1）
> 2. $n_p \mid m$（$n_p$ 整除 $m$，其中 $|G| = p^k \cdot m, p \nmid m$）
> 3. $n_p = [G : N_G(P)]$（$n_p$ 等于正规化子的指数）

## Sylow 子群的正规性

从 Mermaid 图中：

$$\text{Sylow 子群唯一} \implies \text{该 Sylow 子群正规模}$$

- 若 $n_p = 1$，则唯一的 Sylow $p$-子群 $P \trianglelefteq G$
- $P \trianglelefteq G \iff n_p = 1 \iff P$ 在共轭下不变

## 应用：判定群的结构

### 例 1：阶为 15 的群

$|G| = 15 = 3 \times 5$

- $n_3 \equiv 1 \pmod{3}$ 且 $n_3 \mid 5$ $\implies n_3 = 1$
- $n_5 \equiv 1 \pmod{5}$ 且 $n_5 \mid 3$ $\implies n_5 = 1$

唯一的 Sylow 3-子群和 Sylow 5-子群均正规，$G \cong \mathbb{Z}_3 \times \mathbb{Z}_5 \cong \mathbb{Z}_{15}$。

### 例 2：阶为 12 的群

$|G| = 12 = 2^2 \times 3$

- $n_3 \equiv 1 \pmod{3}$ 且 $n_3 \mid 4$ $\implies n_3 = 1 \text{ 或 } 4$
- $n_2$ 为奇数且 $n_2 \mid 3$ $\implies n_3 = 1 \text{ 或 } 3$

因此阶 12 的群不唯一（有 5 个同构类，含 $A_4$）。

## 常见非交换群的 Sylow 结构

| 群 | 阶 | Sylow 2-子群 | Sylow 3-子群 | Sylow 5-子群 |
|---|---|---|---|---|
| $S_3$ | 6 | $\mathbb{Z}_2$ ($n_2=3$) | $\mathbb{Z}_3$ ($n_3=1$) | — |
| $A_4$ | 12 | $V_4$ ($n_2=1$) | $\mathbb{Z}_3$ ($n_3=4$) | — |
| $S_4$ | 24 | $D_8$ ($n_2=3$) | $\mathbb{Z}_3$ ($n_3=4$) | — |
| $A_5$ | 60 | $V_4$ ($n_2=5$) | $\mathbb{Z}_3$ ($n_3=10$) | $\mathbb{Z}_5$ ($n_5=6$) |

## Sylow 定理的证明思路

| 定理 | 核心工具 |
|---|---|
| 第一定理 | 群作用在子集族上 + 轨道公式 |
| 第二定理 | Sylow $p$-子群在共轭作用下的轨道 |
| 第三定理 | $p$-群作用的不动点定理 + 正规化子 |
