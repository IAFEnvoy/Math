---
sidebar_position: 5
---

# 环论补充：极大理想求法、根理想与 CRT

## 怎样求极大理想：$\mathbb{Z}_n$ 的实例

### 整数剩余类环 $\mathbb{Z}_n$

$\mathbb{Z}_n$ 的理想与整除 $n$ 的正因子一一对应。具体地：

**$\mathbb{Z}_n$ 的所有理想**为 $\langle \bar{d} \rangle = (d)$ 对每个 $d \mid n$。

这些理想都是主理想，由 $\bar{d} = d \bmod n$ 生成。

### $\mathbb{Z}_n$ 的极大理想判定

> **定理**：在 $\mathbb{Z}_n$ 中，理想 $(d)$ 是极大理想当且仅当 $d$ 是 $n$ 的一个**素因子**。

等价地：

$$\mathbb{Z}_n \text{ 的极大理想} \;\longleftrightarrow\; \{ (p) \mid p \text{ 是 } n \text{ 的素因子} \}$$

理由：$\mathbb{Z}_n / (d) \cong \mathbb{Z}_d$，商环是域 $\iff d$ 是素数 $\iff (d)$ 极大。

### 例子：求 $\mathbb{Z}_{12}$ 的所有极大理想

$12 = 2^2 \times 3$，素因子为 $2, 3$。因此极大理想为：

$$(2) = \{0, 2, 4, 6, 8, 10\}, \quad (3) = \{0, 3, 6, 9\}$$

所有理想：$(1) = \mathbb{Z}_{12}$，$(2)$，$(3)$，$(4) = \{0,4,8\}$，$(6) = \{0,6\}$，$(12) = (0) = \{0\}$。

其中极大理想：$(2)$ 和 $(3)$。
素理想：$(2)$、$(3)$ 是极大理想故而也是素理想。$(0)$ 不是素理想（因为 $\mathbb{Z}_{12}$ 不是整环）。

### 例子：求 $\mathbb{Z}[x]/(x^2+1)$ 的极大理想

$\mathbb{Z}[x]/(x^2+1) \cong \mathbb{Z}[i]$（高斯整数环）。其极大理想为：

$$(p) \text{ 对素数 } p \equiv 3 \pmod{4}$$

以及素分解对应的理想。这是一个 PID，所以所有非零素理想都是极大理想。

## 根理想（√I）

### 定义

设 $I \trianglelefteq R$ 为交换环 $R$ 的理想。$I$ 的**根理想**（Nilradical）定义为：

$$\sqrt{I} = \{r \in R \mid r^n \in I \text{ 对某个 } n \geq 1\}$$

直观理解：根理想收集了所有"幂次落入 $I$"的元素。

### 基本性质

1. $\sqrt{I}$ 是理想，且 $I \subseteq \sqrt{I}$
2. $\sqrt{\sqrt{I}} = \sqrt{I}$
3. $\sqrt{I \cap J} = \sqrt{I} \cap \sqrt{J}$
4. $\sqrt{I} = R \iff I = R$
5. 若 $P$ 是素理想，则 $\sqrt{P} = P$

### 素理想与根理想

若 $I = P$ 是素理想，则 $\sqrt{P} = P$。**素理想的根就是自身**。

### 命题：$\sqrt{I}$ 是包含 $I$ 的所有素理想的交

$$\sqrt{I} = \bigcap_{P \supseteq I} P$$

其中 $P$ 取遍包含 $I$ 的素理想。这是根理想最重要的刻画。

### 举例

**$\mathbb{Z}$ 中**：对 $(n)$，分解 $n = \prod p_i^{e_i}$，则：

$$\sqrt{(n)} = (p_1 p_2 \cdots p_k)$$

即根理想由 $n$ 的**无平方部分**生成。

例如：$\sqrt{(12)} = \sqrt{(2^2 \cdot 3)} = (6)$。

## 中国剩余定理（环论版）

### 定理陈述

> 若 $I_1, I_2, \ldots, I_n$ 是交换含幺环 $R$ 中**两两互素**的理想（即 $I_i + I_j = R$），则：
> $$R / (I_1 I_2 \cdots I_n) \cong R/I_1 \times R/I_2 \times \cdots \times R/I_n$$
> 同构映射为 $\varphi: r + \bigcap I_i \mapsto (r + I_1, r + I_2, \ldots, r + I_n)$

### 特例：整数环

若 $m = \prod_{i=1}^{n} m_i$ 且各 $m_i$ 两两互素，则：

$$\mathbb{Z}_m \cong \mathbb{Z}_{m_1} \times \mathbb{Z}_{m_2} \times \cdots \times \mathbb{Z}_{m_n}$$

### 如何构造同构映射

标准同构映射为 $a \bmod m \mapsto (a \bmod m_1, a \bmod m_2, \ldots, a \bmod m_n)$。

反向映射：给定 $(a_1, \ldots, a_n)$，用**扩展欧几里得算法**解同余方程组：

$$x \equiv a_i \pmod{m_i}, \quad i = 1, \ldots, n$$

### 举例

$m = 15 = 3 \times 5$（$\gcd(3, 5) = 1$）：

$$\mathbb{Z}_{15} \cong \mathbb{Z}_3 \times \mathbb{Z}_5$$

映射：$x \bmod 15 \mapsto (x \bmod 3, x \bmod 5)$。例如 $7 \mapsto (1, 2)$。

### 应用

1. 通过 $\mathbb{Z}_n$ 的分解理解其理想结构
2. 简化多项式环商环的计算（如 $\mathbb{Z}[x]/(x^2-1)$ 的分解）
3. 与 Sylow 定理结合判断群的直积分解
