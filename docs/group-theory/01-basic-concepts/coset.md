---
sidebar_position: 3
---

# 陪集

## 定义

设 $H \leqslant G$，$a \in G$。

- **左陪集**：$aH = \{ah \mid h \in H\}$
- **右陪集**：$Ha = \{ha \mid h \in H\}$

$a$ 称为该陪集的**代表元**。

## 陪集的基本性质

1. **大小相等**：$|aH| = |H|$（映射 $h \mapsto ah$ 是双射）
2. **$H$ 自身是陪集**：$eH = H = He$
3. **$a \in aH$**：因为 $a = ae \in aH$
4. **$aH = H \iff a \in H$**
5. **$aH = bH \iff a^{-1}b \in H$**（左陪集相等的充要条件）
6. **任意两个左陪集要么相等，要么不相交**：$aH \cap bH \neq \varnothing \Rightarrow aH = bH$

## Lagrange 定理

> 设 $G$ 为有限群，$H \leqslant G$，则 $|H|$ 整除 $|G|$，且
> $$|G| = |H| \cdot [G:H]$$
> 其中 $[G:H]$ 是 $H$ 在 $G$ 中的**指数**（即不同左陪集的个数）。

### 重要推论

1. **元素的阶整除群的阶**：$\forall a \in G$，有 $|a| \mid |G|$
2. **素数阶群必为循环群**：若 $|G| = p$（素数），则 $G \cong \mathbb{Z}_p$
3. **$a^{|G|} = e$**：对任意有限群 $G$ 和任意 $a \in G$

## 陪集分解

$G$ 可以写成互不相交的左陪集的并：

$$G = a_1H \cup a_2H \cup \cdots \cup a_kH$$

其中 $k = [G:H]$，$\{a_1, a_2, \ldots, a_k\}$ 称为 $H$ 在 $G$ 中的一个**左陪集代表系**。

## 双重陪集

设 $H, K \leqslant G$，对 $a \in G$，定义**双重陪集**：

$$HaK = \{hak \mid h \in H, k \in K\}$$

双重陪集也对 $G$ 构成划分。

## 指数公式

设 $K \leqslant H \leqslant G$，则

$$[G:K] = [G:H] \cdot [H:K]$$
