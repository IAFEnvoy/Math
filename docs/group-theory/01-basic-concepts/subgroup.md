---
sidebar_position: 2
---

# 子群

## 定义

设 $G$ 为群，$H \subseteq G$ 为非空子集。若 $H$ 在 $G$ 的运算下也构成群，则称 $H$ 为 $G$ 的**子群**，记作 $H \leqslant G$。

## 子群判定定理

### 第一判定定理（一步判定）

$H \leqslant G \iff H \neq \varnothing$ 且 $\forall a, b \in H$，有 $ab^{-1} \in H$。

### 第二判定定理（两步判定）

$H \leqslant G \iff$：
1. $H \neq \varnothing$
2. $\forall a, b \in H$，有 $ab \in H$（封闭性）
3. $\forall a \in H$，有 $a^{-1} \in H$（逆元封闭）

### 有限子群判定

若 $H$ 是 $G$ 的**有限**非空子集，则 $H \leqslant G \iff H$ 对 $G$ 的运算封闭。

## 特殊子群

| 子群 | 记号 | 说明 |
|---|---|---|
| 平凡子群 | $\{e\}$ | 只含单位元 |
| 非平凡子群 | — | 除 $\{e\}$ 和 $G$ 外的子群 |
| 真子群 | $H < G$ | $H \leqslant G$ 且 $H \neq G$ |

## 生成子群

设 $S \subseteq G$，$G$ 中包含 $S$ 的最小子群称为 $S$ 的**生成子群**，记作 $\langle S \rangle$。

- 当 $S = \{a\}$ 时，$\langle a \rangle = \{a^n \mid n \in \mathbb{Z}\}$ 称为 $a$ 生成的**循环子群**
- $\langle S \rangle$ 由 $S$ 中元素的所有有限乘积构成

## 子群的性质

1. **子群的交**：若 $H_1, H_2 \leqslant G$，则 $H_1 \cap H_2 \leqslant G$
2. **子群的并**：$H_1 \cup H_2$ 未必是子群（一般需要 $H_1 \subseteq H_2$ 或 $H_2 \subseteq H_1$）
3. **传递性**：若 $K \leqslant H$ 且 $H \leqslant G$，则 $K \leqslant G$

## 常见例子

- $n\mathbb{Z} = \{nk \mid k \in \mathbb{Z}\} \leqslant \mathbb{Z}$
- $SL_n(\mathbb{R}) \leqslant GL_n(\mathbb{R})$（行列式为 1 的矩阵构成一般线性群的子群）
- 交错群 $A_n \leqslant S_n$
