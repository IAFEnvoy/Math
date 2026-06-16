---
sidebar_position: 2
---

# 事件运算与概率定义

## 样本空间与事件

### 基本概念

- **样本空间** $\Omega$：随机试验所有可能结果的集合
- **样本点** $\omega$：样本空间中的每个元素
- **随机事件** $A$：$\Omega$ 的子集，即某些样本点组成的集合
- **必然事件**：$\Omega$ 自身
- **不可能事件**：$\varnothing$

### 事件的关系与运算

| 运算 | 记号 | 含义 |
|---|---|---|
| 包含 | $A \subset B$ | $A$ 发生则 $B$ 必发生 |
| 相等 | $A = B$ | $A \subset B$ 且 $B \subset A$ |
| 和事件 | $A \cup B$ | $A$ 与 $B$ 至少一个发生 |
| 积事件 | $A \cap B$（或 $AB$） | $A$ 与 $B$ 同时发生 |
| 差事件 | $A - B$ | $A$ 发生而 $B$ 不发生 |
| 互斥 | $AB = \varnothing$ | $A$ 与 $B$ 不能同时发生 |
| 对立事件 | $\bar{A}$ | $A$ 不发生 |

### 德摩根律（对偶律）

$$\overline{A \cup B} = \bar{A} \cap \bar{B}, \qquad \overline{A \cap B} = \bar{A} \cup \bar{B}$$

推广形式：

$$\overline{\bigcup_{i} A_i} = \bigcap_{i} \bar{A_i}, \qquad \overline{\bigcap_{i} A_i} = \bigcup_{i} \bar{A_i}$$

**通俗理解**："和的非 = 非的积"、"积的非 = 非的和"。

## 概率的公理化定义

### 柯尔莫哥洛夫公理

设 $\Omega$ 为样本空间，$\mathcal{F}$ 为事件域（$\sigma$-代数）。概率 $P$ 是 $\mathcal{F}$ 到 $[0, 1]$ 的映射，满足：

1. **非负性**：$P(A) \geq 0$，$\forall A \in \mathcal{F}$
2. **规范性**：$P(\Omega) = 1$
3. **可列可加性**：若 $A_1, A_2, \ldots$ 两两互斥，则
   $$P\!\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$$

### 概率的基本性质

| 性质 | 公式 |
|---|---|
| 不可能事件 | $P(\varnothing) = 0$ |
| 有限可加性 | $A_i$ 两两互斥 $\Rightarrow$ $P(\bigcup_{i=1}^{n} A_i) = \sum_{i=1}^{n} P(A_i)$ |
| 对立事件 | $P(\bar{A}) = 1 - P(A)$ |
| 减法公式 | 若 $A \subset B$，则 $P(B - A) = P(B) - P(A)$ |
| 单调性 | $A \subset B \Rightarrow P(A) \leq P(B)$ |
| 加法公式 | $P(A \cup B) = P(A) + P(B) - P(AB)$ |
| 一般加法公式 | $P(\bigcup_{i=1}^{n} A_i) = \sum_i P(A_i) - \sum_{i<j} P(A_i A_j) + \cdots + (-1)^{n-1}P(A_1 \cdots A_n)$ |

## 古典概型

样本空间有限且每个样本点等可能：

$$P(A) = \frac{|A|}{|\Omega|} = \frac{\text{有利场合数}}{\text{总场合数}}$$

核心工具：排列组合。

### 常用计数公式

| 场景 | 公式 |
|---|---|
| 排列（有序不放回） | $P_n^k = \dfrac{n!}{(n-k)!}$ |
| 组合（无序不放回） | $\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$ |
| 可重复排列 | $n^k$ |
| 可重复组合 | $\binom{n+k-1}{k}$ |

### 抽样方式的影响

| 方式 | 每次抽取 | 是否独立 |
|---|---|---|
| 放回抽样 | 概率不变 | 各次试验独立 |
| 不放回抽样 | 概率改变 | 各次试验不独立 |

## 几何概型

样本空间为某个可测区域，样本点等可能落在其中。设 $\Omega \subset \mathbb{R}^d$ 有有限正测度（长度/面积/体积），则：

$$P(A) = \frac{m(A)}{m(\Omega)}$$

### 经典问题：碰面问题

两人约定在 $[0, T]$ 内到达，先到者等 $t$ 分钟后离开。求两人相遇的概率。

样本空间 $\Omega = [0, T]^2$（单位正方形）。事件 $A = \{(x, y) \mid |x - y| \leq t\}$（带状区域）。概率为面积比。

## 频率与统计定义

在 $n$ 次重复试验中，事件 $A$ 发生的次数 $n_A$ 称为**频数**，比值 $\dfrac{n_A}{n}$ 称为**频率**。

**频率的稳定性**（大数定律的直观基础）：当 $n \to \infty$ 时，频率稳定于某个常数——这个常数就是概率。

## 概率空间

三元组 $(\Omega, \mathcal{F}, P)$：

- $\Omega$：样本空间
- $\mathcal{F}$：事件域（$\sigma$-代数），满足对可列交、可列并、取补封闭
- $P$：$\mathcal{F}$ 上的概率测度
