---
sidebar_position: 5
---

# 群论补充：子群乘积与正规子群验证

## 子群的乘积

### 定义

设 $H, K \leqslant G$。$H$ 与 $K$ 的**乘积**定义为：

$$HK = \{hk \mid h \in H, k \in K\}$$

**注意**：$HK$ 是 $G$ 的子集，但**不一定是子群**。

### $HK$ 何时是子群

> **定理**：$HK \leqslant G \iff HK = KH$。

- 若 $H$ 与 $K$ 中至少一个是正规子群，则 $HK = KH$，从而 $HK \leqslant G$
- 若 $H \trianglelefteq G$，则 $HK = KH$ 对任意 $K \leqslant G$ 成立

### $|HK|$ 的计数公式

$$|HK| = \frac{|H| \cdot |K|}{|H \cap K|}$$

这个公式对任意有限子群 $H, K$ 成立——无论 $HK$ 是否是子群。

### 举例

**例 1**：$G = S_3$，$H = \{\text{id}, (1\;2)\}$（$|H| = 2$），$K = \{\text{id}, (1\;3)\}$（$|K| = 2$）。

$HK = \{\text{id}, (1\;2), (1\;3), (1\;2)(1\;3) = (1\;3\;2)\}$，$|HK| = 4$。

但 $S_3$ 没有 4 阶子群（4 不整除 6），故 $HK$ **不是子群**。验证：$KH \neq HK$。

**例 2**：$G = \mathbb{Z}_6$（加法群），$H = \langle 2 \rangle = \{0, 2, 4\}$，$K = \langle 3 \rangle = \{0, 3\}$。

$H \cap K = \{0\}$，$|HK| = (3 \times 2) / 1 = 6$，$HK = G$ 是子群。

### 正规子群的乘积

若 $N, M \trianglelefteq G$，则 $NM \trianglelefteq G$。

特别地，若 $N \trianglelefteq G$，$M \trianglelefteq G$，$N \cap M = \{e\}$ 且 $G = NM$，则 $G \cong N \times M$（内直积）。

## 正规子群的验证方法

要验证 $N \leqslant G$ 是否正规，按优先级依次检查以下方法：

### 方法一：定义验证

$$\forall g \in G, \forall n \in N, \; gng^{-1} \in N$$

即 $gNg^{-1} \subseteq N$。由于 $|gNg^{-1}| = |N|$（共轭保大小），只需验证包含关系。

### 方法二：指数为 2

> 若 $[G : H] = 2$，则 $H \trianglelefteq G$。

这是最常用的判定之一。例如 $A_n \trianglelefteq S_n$（$[S_n : A_n] = 2$）。

### 方法三：利用交换性

> 若 $G$ 是交换群，则 $G$ 的**任意**子群都是正规子群。

### 方法四：利用中心

> 若 $H \leqslant Z(G)$（$H$ 包含于中心），则 $H \trianglelefteq G$。

特别地，中心 $Z(G) \trianglelefteq G$。

### 方法五：Sylow 唯一性

> 若 $n_p = 1$，则唯一的 Sylow $p$-子群是正规子群。

### 方法六：验证双陪集

$$N \trianglelefteq G \iff gN = Ng,\; \forall g \in G$$

### 举例：验证 $A_n \trianglelefteq S_n$

- 方法：$[S_n : A_n] = \dfrac{n!}{n!/2} = 2$
- 结论：指数为 2 的子群必正规

### 反例：非正规子群

$S_3$ 中，$H = \{\text{id}, (1\;2)\}$ 不是正规子群，因为 $(1\;3) H (1\;3) = \{\text{id}, (2\;3)\} \neq H$。
