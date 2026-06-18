---
sidebar_position: 4
---

# 同态基本定理

同态基本定理（第一同构定理）是整个环同态理论的基石。它连接了同态的核、像与商环——任何一个环同态本质上就是一个商环映射。

## 第一同构定理（同态基本定理）

> **定理**：设 $\varphi: R \to S$ 为环同态。则
> $$R / \ker \varphi \cong \operatorname{im} \varphi$$
> 由同构 $\psi: R/\ker \varphi \to \operatorname{im} \varphi$，$\psi(r + \ker \varphi) = \varphi(r)$ 给出。

### 证明思路

1. $\ker \varphi$ 是理想，故 $R/\ker \varphi$ 是商环
2. 验证 $\psi$ 是良定义的、环同态、单射、满射
3. 良定义性由同态性质保证；单射由 $\varphi(r) = 0 \iff r \in \ker \varphi$ 保证

### 直观理解

同态把"模掉核"等同于"压缩到像"。

```
R ──φ──→ S
│        ↑
│        │
↓        │
R/ker φ ≅ im φ
```

## 第二同构定理（子环-理想定理）

> **定理**：设 $R$ 为环，$S \leqslant R$（子环），$I \trianglelefteq R$（理想）。则
> $$S / (S \cap I) \cong (S + I) / I$$

这一定理与群论的第二同构定理形式上完全一致。

## 第三同构定理（商环-商环定理）

> **定理**：设 $I \subseteq J$ 均为 $R$ 的理想。则
> $$(R/I) / (J/I) \cong R/J$$

## 对应定理（Lattice 同构定理）

> **定理**：设 $I \trianglelefteq R$，$\pi: R \to R/I$ 为自然投影。则 $\pi$ 给出 $R$ 中包含 $I$ 的理想与 $R/I$ 的理想之间的一一对应：

$$\{\text{理想 } J \mid I \subseteq J \subseteq R\} \longleftrightarrow \{\text{理想 } \overline{J} \mid \overline{J} \trianglelefteq R/I\}$$

且此对应保持包含关系、素理想和极大理想。

### 重要推论

- $R/I$ 是单环 $\iff$ $I$ 是极大理想
- $R/I$ 是整环 $\iff$ $I$ 是素理想

## 同构定理总结

| 定理 | 内容 | 群论对应 |
|---|---|---|
| 第一同构定理 | $R/\ker \varphi \cong \operatorname{im} \varphi$ | $G/\ker \varphi \cong \operatorname{im} \varphi$ |
| 第二同构定理 | $S/(S \cap I) \cong (S + I)/I$ | 完全相同 |
| 第三同构定理 | $(R/I)/(J/I) \cong R/J$ | 完全相同 |
| 对应定理 | 理想的一一对应 | 子群/正规子群的对应 |

## 应用实例

### 证明 $\mathbb{R}[x] / (x^2 + 1) \cong \mathbb{C}$

考虑赋值同态 $\operatorname{ev}_i: \mathbb{R}[x] \to \mathbb{C}$，$f \mapsto f(i)$。由第一同构定理：

$$\mathbb{R}[x] / \ker \operatorname{ev}_i \cong \operatorname{im} \operatorname{ev}_i$$

由于 $f(i) = 0 \iff (x^2 + 1) \mid f(x)$（在此环中），知 $\ker \operatorname{ev}_i = (x^2 + 1)$；且 $\operatorname{ev}_i$ 满射（所有复数都可表为实多项式在 $i$ 处的值），故：

$$\mathbb{R}[x] / (x^2 + 1) \cong \mathbb{C}$$
